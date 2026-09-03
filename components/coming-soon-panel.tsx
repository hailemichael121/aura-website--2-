import Image from "next/image";

type ComingSoonPanelProps = {
  title: string;
  message?: string;
  eyebrow?: string;
  variant?: "page" | "section";
};

export default function ComingSoonPanel({
  title,
  message,
  eyebrow,
  variant = "section",
}: ComingSoonPanelProps) {
  const isPage = variant === "page";

  return (
    <div
      className={
        isPage
          ? "flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center px-6 pt-24 pb-20"
          : "w-full px-6 py-12 md:py-14"
      }
    >
      <div
        className={
          isPage
            ? "w-full max-w-lg text-center"
            : "mx-auto w-full max-w-md text-center"
        }
      >
        <Image
          src="/images/aura-logo.webp"
          alt="AURA logo"
          width={isPage ? 64 : 52}
          height={isPage ? 64 : 52}
          className={
            isPage
              ? "mx-auto h-16 w-16 object-cover"
              : "mx-auto h-[3.25rem] w-[3.25rem] object-cover"
          }
        />

        {eyebrow ? (
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}

        <h2
          className={
            isPage
              ? "mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
              : "mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          }
        >
          {title}
        </h2>

        {/* {message && isPage ? (
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {message}
          </p>
        ) : null} */}
      </div>
    </div>
  );
}
