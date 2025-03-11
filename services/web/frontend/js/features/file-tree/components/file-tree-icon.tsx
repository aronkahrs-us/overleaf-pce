import { useTranslation } from 'react-i18next'
import iconTypeFromName, {
  newEditorIconTypeFromName,
} from '../util/icon-type-from-name'
import classnames from 'classnames'
import MaterialIcon from '@/shared/components/material-icon'
import { useFeatureFlag } from '@/shared/context/split-test-context'

function FileTreeIcon({
  isLinkedFile,
  name,
}: {
  name: string
  isLinkedFile?: boolean
}) {
  const { t } = useTranslation()

  const className = classnames('file-tree-icon', {
    'linked-file-icon': isLinkedFile,
  })

  const newEditor = useFeatureFlag('editor-redesign')

  if (newEditor) {
    return (
      <>
        <MaterialIcon
          unfilled
          type={newEditorIconTypeFromName(name)}
          className={className}
        />
        {isLinkedFile && (
          <MaterialIcon
            type="open_in_new"
            modifier="rotate-180"
            className="linked-file-highlight"
            accessibilityLabel={t('linked_file')}
          />
        )}
      </>
    )
  }

  return (
    <>
      &nbsp;
      <MaterialIcon type={iconTypeFromName(name)} className={className} />
      {isLinkedFile && (
        <MaterialIcon
          type="open_in_new"
          modifier="rotate-180"
          className="linked-file-highlight"
          accessibilityLabel={t('linked_file')}
        />
      )}
    </>
  )
}

export default FileTreeIcon
