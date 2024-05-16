import ContentLoader from "react-content-loader";

export function RadioButtonSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={100}
      height={17}
      viewBox="0 0 100 17"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="30" y="0" rx="0" ry="0" width="100" height="17" />
      <circle cx="10" cy="8" r="8" />
    </ContentLoader>
  );
}
