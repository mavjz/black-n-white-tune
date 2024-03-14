export type ButtonDetailsType = {
    title: string;
    openCloseFn: () => void;
    isOpen: boolean;
    children: React.ReactNode;
};
