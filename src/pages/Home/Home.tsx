import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';

import getPostById from 'api/api';

interface IHome {
  prop?: unknown;
}

const Home: FC<IHome> = (props) => {
  // eslint-disable-next-line no-console
  console.log('Home props:', props);

  const { data, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostById(123),
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('data: ', data);
  }, [data]);

  return (
    <div className={clsx('home', { isError })}>
      <FormattedMessage id="home.title" defaultMessage="Home Page" />
    </div>
  );
};

export default Home;
