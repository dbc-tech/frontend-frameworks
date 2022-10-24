import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Card } from 'components/card';
import { Framework, Stat } from 'data/data-schema';
import { cx } from 'lib/tailwind';
import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, ChevronUpDown } from './chevron';
import { HeaderText } from './header-text';
import { InfoArrayCell } from './info-array-cell';
import { InfoCell } from './info-cell';
import { StatCell } from './stat-cell';
import { StatCircularCell } from './stat-circular-cell';

const columnHelper = createColumnHelper<Framework>();

const sortStat: SortingFn<Framework> = (ra, rb, id) => {
  const a = ra.getValue<Stat>(id)?.value;
  const b = rb.getValue<Stat>(id)?.value;

  if (a == null) return -1;

  if (b == null) return 1;

  if (a === b) return 0;

  return a > b ? 1 : -1;
};

export type DataTableProps = React.ComponentProps<'div'> & {
  data: Framework[];
};

export const DataTable = ({ data }: DataTableProps) => {
  const columns = useMemo<ColumnDef<Framework, any>[]>(
    () => [
      columnHelper.accessor('name', {
        header: () => <HeaderText className="w-[120px]">Framework</HeaderText>,
        cell: (info) => (
          <InfoCell
            info={info.getValue()}
            className="pl-4 font-semibold text-gray-50 text-base w-[110px]"
          />
        ),
        enableSorting: false,
      }),

      columnHelper.accessor('githubStars', {
        header: () => <HeaderText>Github stars</HeaderText>,
        cell: (info) => (
          <StatCell stat={info.getValue()} className="w-[130px]" />
        ),
        sortingFn: sortStat,
      }),

      columnHelper.accessor('npmWeeklyDownloads', {
        header: () => <HeaderText>NPM downloads</HeaderText>,
        cell: (info) => (
          <StatCell stat={info.getValue()} className="w-[150px]" />
        ),
        sortingFn: sortStat,
      }),

      columnHelper.accessor('loved', {
        header: () => <HeaderText>Loved by</HeaderText>,
        cell: (info) => (
          <StatCircularCell
            stat={info.getValue()}
            color="#ff007f"
            className="w-[100px]"
          />
        ),
        sortingFn: sortStat,
      }),

      columnHelper.accessor('usage', {
        header: () => <HeaderText>Usage</HeaderText>,
        cell: (info) => (
          <StatCircularCell
            stat={info.getValue()}
            color="#ff5f1f"
            className="w-[100px]"
          />
        ),
        sortingFn: sortStat,
      }),

      columnHelper.accessor('retention', {
        header: () => <HeaderText>Retention</HeaderText>,
        cell: (info) => (
          <StatCircularCell
            stat={info.getValue()}
            color="#66ff00"
            className="w-[100px]"
          />
        ),
        sortingFn: sortStat,
      }),

      columnHelper.accessor('render', {
        header: () => <HeaderText>Rendering</HeaderText>,
        cell: (info) => (
          <InfoCell info={info.getValue()} className="w-[100px]" />
        ),
        enableSorting: false,
      }),

      columnHelper.accessor('releaseDate', {
        header: () => <HeaderText>Released</HeaderText>,
        cell: (info) => (
          <InfoCell info={info.getValue()} className="w-[80px]" />
        ),
        sortingFn: sortStat,
      }),

      columnHelper.accessor('metaFrameworks', {
        header: () => (
          <HeaderText className="w-[100px]">Meta frameworks</HeaderText>
        ),
        cell: (info) => (
          <InfoArrayCell infoArray={info.getValue()} className="w-[100px]" />
        ),
        enableSorting: false,
      }),
    ],
    []
  );

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card className="w-full lg:max-w-7xl">
      <div className="pb-12 overflow-x-auto">
        <table className="whitespace-pre-wrap">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b-2 border-gray-500 w-max"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={cx('first:pl-4 last:pr-4 pb-6 text-left w-max')}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cx(
                          'flex items-center gap-1',
                          header.column.getCanSort() &&
                            'cursor-pointer select-none',
                          'pr-2',
                          'group'
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <span>
                            {{ asc: <ChevronUp />, desc: <ChevronDown /> }[
                              header.column.getIsSorted() as string
                            ] ?? (
                              <ChevronUpDown className="opacity-0 group-hover:opacity-100" />
                            )}
                          </span>
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={cx('border-b-2 border-gray-500 w-max')}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={cx('py-4 pr-2')}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
