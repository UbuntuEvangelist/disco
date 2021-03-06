import React from 'react';
import { MessageKey, P, H3 } from '../../i18n';
import { joinClassName } from '../elements/utils';

interface Props {
    title: MessageKey
    content: MessageKey
    titleClassName?: string
    contentClassName?: string
    children?: React.ReactNode
}

const DEFAULT_PROPS = {
  titleClassName: 'font-extrabold',
  contentClassName: '',
  children: null,
};

export const ContentCard = ({
  title, content, titleClassName, contentClassName, children,
}: Props) => (
  <div className="py-8 w-1/2 tracking-wide flex flex-col gap-2">
    <H3
      messageKey={title}
      className={joinClassName(DEFAULT_PROPS.titleClassName, titleClassName)}
    />
    <P messageKey={content} className={contentClassName} />
    {children}
  </div>
);

ContentCard.defaultProps = DEFAULT_PROPS;
