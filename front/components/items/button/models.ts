export type ButtonType = {
    isLink?: boolean;
    isImage?: boolean;
    isMUIIcon?: boolean;
    className?: string;
} & (
    | {
          isLink: true;
          link: string;
          onClick?: never;
          buttonType?: never;
          buttonClassName?: never;
          disabled?: never;
      }
    | {
          isLink?: false;
          link?: never;
          onClick: () => void;
          buttonType?: 'button' | 'submit' | 'reset' | undefined;
          buttonClassName?: string;
          disabled?: never;
      }
    | {
          isLink?: false;
          link?: never;
          onClick?: never;
          buttonType: 'button' | 'submit' | 'reset' | undefined;
          buttonClassName?: string;
          disabled?: boolean;
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
              className: string;
              classNameFramed?: string;
          }
        | {
              isImage?: false;
              image?: never;
              alt?: never;
              text: string;
              isMUIIcon?: false;
              children?: never;
              classNameFramed?: never;
          }
        | {
              isImage?: false;
              image?: never;
              alt?: never;
              text?: never;
              isMUIIcon: true;
              children: React.ReactNode;
              classNameFramed?: never;
          }
    );
