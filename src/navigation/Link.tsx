import React, { forwardRef } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { MessageKey, Text } from '../i18n';

type Props = Omit<GatsbyLinkProps<null>, 'style'>

export const Link = forwardRef(({ children, ...rest }: Props, ref) => (
  <GatsbyLink
      // @ts-ignore
    ref={ref}
    {...rest}
  >
    {children}
  </GatsbyLink>
));

interface HeaderLinkProps extends Props {
  messageKey: MessageKey
}
export const HeaderLink: React.FC<HeaderLinkProps> = (
  { to, messageKey, ...rest }: HeaderLinkProps,
) => (
  // @ts-ignore
  <Link
    to={to}
    {...rest}
  >
    <h4 className="mb-0 text-gray-600 uppercase">
      <Text messageKey={messageKey} />
    </h4>
  </Link>
);

export const HeaderMainLink: React.FC<HeaderLinkProps> = ({ to, messageKey }: HeaderLinkProps) => (
  <Link
    to={to}
  >
    <h3 className="mb-0 text-black">
      <Text messageKey={messageKey} />
    </h3>
  </Link>
);
