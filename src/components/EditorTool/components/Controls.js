/* eslint-disable */
import React from 'react';
import cn from 'classnames'
import StyleButton from './StyleButton';
import styles from '../EditorTool.scss';

export default function Controls(props) {
  const allControls = []
  const { editorState, inline: inlineProps, blocks: blocksProps } = props

  if (blocksProps) {
    const { blockTypes } = blocksProps;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    const allBlocks = blockTypes.map((type) =>
      <StyleButton
        key={type.label}
        active={type.style === blockType}
        label={type.label}
        onToggle={blocksProps.onToggle}
        style={type.style}
      />
    )

    allControls.push(allBlocks)
  }

  if (inlineProps) {
    let { inlineStyles } = inlineProps;
    var currentStyle = editorState.getCurrentInlineStyle();
    const allInlines = inlineStyles.map(type =>
      <StyleButton
        key={type.label}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={inlineProps.onToggle}
        style={type.style}
      />
    )

    allControls.push(allInlines)
  }

  const toolbars = React.Children.toArray(allControls)

  return (
    <div className={cn('d-flex justify-content-around p-2', styles.controls)}>
      {React.Children.map(toolbars, (toolbarComponent) => {
        if (React.isValidElement(toolbarComponent)) {
          return React.cloneElement(toolbarComponent)
        }
      })}
    </div>
  );
}
