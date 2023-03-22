import React from "react"
import { Button, Form, Input, Modal, Switch } from "antd"
import { ControllerMetaEditor, IEventMeta } from "@rxdrag/react-antd-minions-editor"
import { memo, useCallback, useEffect, useState } from "react"
import { IControllerMeta, IReactionDefineMeta } from "@rxdrag/schema"
import { useCurrentNode, useToolsTranslate } from "@rxdrag/react-core"
import { createUuid } from "@rxdrag/shared"
import { reactionMaterialCategories } from "@rxdrag/react-minions-materials"
import { useControllerMetas } from "./hooks/useControllerMetas"

export const ReactionsInput = memo((props: {
  events?: IEventMeta[]
  title: string,
  value?: IControllerMeta,
  onChange?: (value?: IControllerMeta) => void,
}) => {
  const { events, title, value, onChange, ...other } = props;
  const [inputValue, setInputValue] = useState<IControllerMeta>()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useToolsTranslate()
  const node = useCurrentNode()
  const controllers = useControllerMetas()

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    const eventMetas: IReactionDefineMeta[] = [...(value?.events || [])]
    for (const event of events || []) {
      if (!value?.events?.find(evt => evt.name === event.name)) {
        eventMetas.push({
          id: createUuid(),
          name: event.name,
          label: event.label,
        })
      }
    }
    if (value) {
      setInputValue({ ...value, events: eventMetas })
    }
  }, [events, value])

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSwitchChange = useCallback((checked: boolean) => {
    if (checked) {
      const id = value?.id || createUuid()
      onChange?.({ ...value, id: id, enable: true })
    } else {
      if (value) {
        onChange?.({ ...value, enable: false })
      }
    }
  }, [onChange, value]);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    if (value) {
      onChange?.({ ...value, name: inputValue })
    }
  }, [onChange, value]);

  const handleConfigChange = useCallback((meta?: IControllerMeta) => {
    if (value) {
      setInputValue({ ...meta, id: value.id, name: value?.name })
    }
  }, [value]);

  const handleOk = useCallback(() => {
    onChange?.(inputValue)
    setIsModalOpen(false);
  }, [inputValue, onChange])

  return (
    <div>
      <Form.Item
        label={title}
      >
        <Switch checked={value?.enable} onChange={handleSwitchChange} />
      </Form.Item>
      {
        value?.id &&
        <>
          <Form.Item
            label={t("controllerName")}
          >
            <Input value={value.name} onChange={handleNameChange} />
          </Form.Item>
          <Form.Item
            label={t("config")}
          >
            <Button {...other} onClick={showModal}>{t("configController")}</Button>
          </Form.Item>

          <Modal
            title={`${t("configController")} - ${node?.meta["x-controller"]?.label || node?.title}`}
            open={isModalOpen}
            cancelText={t("cancel")}
            okText={t("confirm")}
            onCancel={handleCancel}
            onOk={handleOk}
            width={"calc(100vw - 40px)"}
            style={{
              transform: 'scale(1)',
            }}
            getContainer={false}
            centered
            destroyOnClose
          >
            {
              inputValue &&
              <ControllerMetaEditor
                value={inputValue}
                onChange={handleConfigChange}
                controllerMetas={controllers}
                mareials={reactionMaterialCategories}
              />
            }
          </Modal>
        </>
      }

    </div>

  )
})