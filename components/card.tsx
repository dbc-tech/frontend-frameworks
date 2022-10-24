import { cx } from '../lib/tailwind';

export type CardProps = React.ComponentProps<'div'>;

export const Card = ({ className, children, ...rest }: CardProps) => (
  <div
    className={cx(
      'py-10 px-10',
      'flex justify-center',
      'bg-slate-800 border-2 rounded-lg border-slate-800',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);
