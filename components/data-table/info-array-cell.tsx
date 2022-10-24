import { SpacerNa } from 'components/spacer';
import { Info as InfoType } from 'data/data-schema';
import { cx } from 'lib/tailwind';
import { InfoCell } from './info-cell';

export type InfoArrayCellProps = React.ComponentProps<'div'> & {
  infoArray?: InfoType[];
};

export const InfoArrayCell = ({ infoArray, className }: InfoArrayCellProps) => {
  return infoArray ? (
    <div className={cx(className)}>
      {infoArray.map((f, index) => (
        <InfoCell key={index} info={f} />
      ))}
    </div>
  ) : (
    <SpacerNa />
  );
};
