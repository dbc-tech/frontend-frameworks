import { cx } from 'lib/tailwind';

export type HeaderTextProps = React.ComponentProps<'div'>;

export const HeaderText = ({ children, className }: HeaderTextProps) => (
  <div
    className={cx(
      'text-sm text-gray-400 font-semibold',
      'whitespace-pre-wrap break-words list-none',
      className
    )}
  >
    {children}
  </div>
);
