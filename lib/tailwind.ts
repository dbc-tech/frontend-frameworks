import clsx from 'clsx';
import { compose } from 'rambda';
import { twMerge } from 'tailwind-merge';

export const cx = compose(twMerge, clsx);