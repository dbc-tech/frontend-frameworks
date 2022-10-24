/* eslint-disable @next/next/no-img-element */
import { ExternalLink } from 'components/external-link';
import { Info } from 'data/data-schema';
import { cx } from 'lib/tailwind';

export type InfoCellProps = React.ComponentProps<'div'> & {
  info: Info;
};

export const InfoCell = ({ info, className }: InfoCellProps) => {
  return (
    <div className={cx('whitespace-pre-wrap list-none mb-2 last:mb-0')}>
      {info.link ? (
        <ExternalLink className={cx('text-xs', className)} href={info.link}>
          {info.value}
        </ExternalLink>
      ) : (
        <p className={cx('text-xs font-semibold text-gray-50', className)}>{info.value}</p>
      )}
      {info.badge && <img src={info.badge} alt="badge" className="max-h-4" />}
    </div>
  );
};
