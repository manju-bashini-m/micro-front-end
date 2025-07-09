import React, { Suspense } from 'react';

const RemoteHeader = React.lazy(() => import('home/Header'))
const RemoteFooter = React.lazy(() => import('home/Footer'))

const App = () => (
  <div>
    <Suspense fallback={<div>Loading Header...</div>}>
      <RemoteHeader />
    </Suspense>

    <main>
      <h2>This is the Host App!</h2>
    </main>

    <Suspense fallback={<div>Loading Footer...</div>}>
      <RemoteFooter />
    </Suspense>
  </div>
)

export default App
