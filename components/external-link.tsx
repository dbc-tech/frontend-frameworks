import { cx } from '../lib/tailwind';

export type ExternalLinkProps = React.ComponentProps<'a'> & {
  href: string;
};

export const ExternalLink = ({
  href,
  children,
  className,
  ...rest
}: ExternalLinkProps) => (
  <a
    className={cx('text-blue-400 hover:text-blue-600', className)}
    href={href}
    target="_blank"
    rel="noreferrer"
    {...rest}
  >
    {children}
  </a>
);
