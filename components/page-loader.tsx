import AuraLoader from "@/components/aura-loader";

interface PageLoaderProps {
  message?: string;
}

export default function PageLoader({ message = "Loading..." }: PageLoaderProps) {
  return <AuraLoader message={message} />;
}
