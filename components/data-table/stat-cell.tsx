/* eslint-disable @next/next/no-img-element */
import { Spacer } from 'components/spacer';
import { Stat as StatType } from 'data/data-schema';
import { cx } from 'lib/tailwind';

export type StatCellProps = React.ComponentProps<'div'> & {
  stat: StatType;
};

export const StatCell = ({ stat, className }: StatCellProps) => {
  return stat.badge ? (
    <div className={cx('h-8', className)}>
      <img src={stat.badge} alt="stat badge" />
      {/* <object data={stat.badge} width="100%" height="100%" /> */}
    </div>
  ) : (
    <Spacer />
  );
};
