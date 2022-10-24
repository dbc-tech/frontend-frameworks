import { cx } from '../lib/tailwind';

export type ListProps = React.ComponentProps<'ul'>;

export const List = ({ children, className, ...rest }: ListProps) => (
  <ul className={cx('pl-3 md:pl-6 list-disc space-y-1', className)} {...rest}>
    {children}
  </ul>
);
