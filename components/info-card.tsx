import { cx } from 'lib/tailwind';
import { Card, CardProps } from './card';
import { CardHeader } from './text';

export type InfoCardProps = CardProps & { title?: string };

export const InfoCard = ({
  title,
  children,
  className,
  ...rest
}: InfoCardProps) => {
  return (
    <Card
      className={cx('mt-8 w-full lg:max-w-7xl justify-start', className)}
      {...rest}
    >
      <div className="space-y-4 text-base">
        {title && <CardHeader>{title}</CardHeader>}
        <div className="space-y-4 text-base md:px-4">{children}</div>
      </div>
    </Card>
  );
};
