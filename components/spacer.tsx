export type SpacerProps = React.ComponentProps<'div'>;

export const Spacer = ({ children, ...rest }: SpacerProps) => (
  <div {...rest}>{children}</div>
);

export const SpacerNa = ({ ...rest }) => <Spacer {...rest}>NA</Spacer>;
