declare namespace Buttons {
  type variants =
    | 'is-primary'
    | 'is-secondary'
    | 'is-info'
    | 'is-danger'
    | 'is-link';

  type SharedProps = {
    extraClasses?: string;
    variant?: variants;
    children: React.ReactNode;
  };

  type Props = {
    text: string;
  } & SharedProps;

  type LinkProps = SharedProps;
}
