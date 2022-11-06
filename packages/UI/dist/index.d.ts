declare type ButtonVariants = 'default' | 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'warning';
declare type ButtonForms = 'outlined' | 'contained' | 'nude';
declare type ButtonTypes = 'submit' | 'button';
declare type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    type?: ButtonTypes;
    variant?: ButtonVariants;
    form?: ButtonForms;
    onClick?: (e?: React.FormEvent) => void;
};

declare const Button: ({ children, className, variant, type, form, onClick, }: ButtonProps) => JSX.Element;

declare const Input: () => JSX.Element;

export { Button, Input };
