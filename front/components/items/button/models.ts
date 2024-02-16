export type ButtonType = {
    isLink?: boolean;
    isImage?: boolean;
    isMUIIcon?: boolean;
    className: string;
} & (
    | {
          isLink: true;
          link: string;
          onClick?: never;
          buttonType?: never;
          buttonClassName?: never;
      }
    | {
          isLink?: false;
          link?: never;
          onClick: () => {};
          buttonType: 'button' | 'submit' | 'reset' | undefined;
          buttonClassName: string;
      }
) &
    (
        | {
              isImage: true;
              image: string;
              alt: string;
              text?: never;
              isMUIIcon?: false;
              children?: never;
          }
        | {
              isImage?: false;
              image?: never;
              alt?: never;
              text: string;
              isMUIIcon?: false;
              children?: never;
          }
        | {
              isImage?: false;
              image?: never;
              alt?: never;
              text?: never;
              isMUIIcon: true;
              children: React.ReactNode;
          }
    );
