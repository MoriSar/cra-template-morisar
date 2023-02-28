import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

interface INotFound {
  prop?: unknown;
}

const NotFound: FC<INotFound> = (props) => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.log('NotFound props:', props);
  // eslint-disable-next-line no-console
  console.error(error);
  return <div>NotFound</div>;
};

export default NotFound;
