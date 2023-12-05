import React, { useEffect, Suspense } from 'react'

// ** Router Import
import { useSkin } from "@hooks/useSkin";
import Router from './router/Router'

const App = () => {
  // useEffect(() => {
  //   // dispatch(getMyProfile());
  //   setSkin("dark");
  // }, []);
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
