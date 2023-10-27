import React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in src/pages/.
            <br />
          </>
        ) : null}
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </main>
  );
}

export const Head: HeadFC = () => <title>Poo Patrol | 404 Error</title>;
