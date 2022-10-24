import { cx } from 'lib/tailwind';

export type TextProps = React.ComponentProps<'p'>;

export const CardHeader = ({ className, children }: TextProps) => (
  <p className={cx('text-xl font-bold', className)}>{children}</p>
);

export const CardSubHeader = ({ className, children }: TextProps) => (
  <p className={cx('pt-4 text-base font-bold', className)}>{children}</p>
);

export const Why = () => (
  <CardSubHeader className="text-green-400">Why</CardSubHeader>
);

export const WhyNot = () => (
  <CardSubHeader className="text-red-400">Why Not</CardSubHeader>
);
