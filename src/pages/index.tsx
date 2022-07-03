import React, { useMemo } from 'react';
import Layout from '@app/layouts/MainLayout';
import useTranslation from 'next-translate/useTranslation';
import HelloWorld from '@app/components/HelloWorld';
import GoogleAnalytics from '../components/GoogleAnalytics';

function Index(): JSX.Element {
  const { t } = useTranslation();
  const title = useMemo(() => t('home:title'), [t]);
  const description = useMemo(() => t('home:description'), [t]);

  return (
    <Layout
      title={title}
      description={description}
    >
      <GoogleAnalytics measurementId="G-RHXKN40YH1" />
      <HelloWorld text={description} />
    </Layout>
  );
}

export default Index;
