import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Stat } from 'data/data-schema';
import { Spacer } from 'components/spacer';
import { cx } from 'lib/tailwind';

export type StatCircularCellProps = React.ComponentProps<'div'> & {
  stat: Stat;
  color?: string;
};

export const StatCircularCell = ({
  stat,
  color = '#ff9248',
  className,
}: StatCircularCellProps) => {
  return (
    <div className={cx('flex justify-start', className)}>
      {stat && stat.value ? (
        <div className={cx('w-12 h-12')}>
          <CircularProgressbar
            value={stat.value}
            text={`${stat.value}%`}
            strokeWidth={12}
            styles={buildStyles({
              textColor: 'white',
              pathColor: color,
              trailColor: 'white',
            })}
          />
        </div>
      ) : (
        <Spacer className="pl-2 text-xs">NA</Spacer>
      )}
    </div>
  );
};
