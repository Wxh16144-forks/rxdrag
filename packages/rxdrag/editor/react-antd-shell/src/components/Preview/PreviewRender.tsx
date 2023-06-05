import { IDocument } from "@rxdrag/core"
import { IFieldSchema } from "@rxdrag/fieldy"
import { ILogicFlowControllerMeta } from "@rxdrag/minions-runtime-react"
import { useDocumentViewTypeState } from "@rxdrag/react-core"
import { Fieldy, VirtualForm } from "@rxdrag/react-fieldy"
import { ComponentRender, RuntimeRoot } from "@rxdrag/react-runner"
import { IComponents } from "@rxdrag/react-shared"
import { INodeSchema } from "@rxdrag/schema"
import { useToken } from "antd/es/theme/internal"
import { memo, useEffect, useMemo, useState } from "react"
import { ThemeProvider } from "styled-components"

export const PreviewRender = memo((
  props: {
    components?: IComponents
    doc?: IDocument,
  }
) => {
  const { components, doc } = props
  const [tree, setTree] = useState<INodeSchema>()
  const [viewType] = useDocumentViewTypeState(doc?.id)
  const [, token] = useToken()
  const theme = useMemo(() => {
    return {
      token
    }
  }, [token])

  useEffect(() => {
    if (viewType === 'preview') {
      setTree(doc?.getSchemaTree() || undefined)
    }
  }, [doc, viewType])

  return (
    <ThemeProvider theme={theme}>
      {
        tree && viewType === "preview" &&
        <RuntimeRoot
          components={components}
          schema={doc?.getSchemaTree() as INodeSchema<IFieldSchema, ILogicFlowControllerMeta>}
        >
          <Fieldy>
            <VirtualForm>
              <ComponentRender
                root={tree}
              />
            </VirtualForm>
          </Fieldy>
        </RuntimeRoot>
      }
    </ThemeProvider>
  )
})