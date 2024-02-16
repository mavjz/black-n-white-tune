export type ButtonType =
    | {
          isLink?: boolean;
          isImage?: boolean;
          isMUIIcon?: boolean;
          className: string;
      } & (
          | {
                isMUIIcon: true;
                MUIIcon: React.ReactNode;
            }
          | {
                isMUIIcon?: false;
                MUIIcon?: never;
            }
      ) &
          (
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
              | { isImage: true; image: string; alt: string; text?: never }
              | { isImage?: false; image?: never; alt?: never; text: string }
          );
