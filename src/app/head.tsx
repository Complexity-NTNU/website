export default function Head() {
  return (
    <>
      <meta name="color-scheme" content="light dark" />
      <link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: light)" />
      <link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
    </>
  );
}