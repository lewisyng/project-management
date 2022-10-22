import { useState, FormEvent } from 'react';
import BaseModal from '../Modal/BaseModal';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './CreateNewBoardModal.module.sass';

export const CreateNewBoardModal = ({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
    className?: string;
}) => {
    const [name, setName] = useState<string>('');

    // const createBoard = (e: FormEvent) => {
    //     e.preventDefault();

    //     database.boards.add({
    //         title: name,
    //     });

    //     setName('');
    //     handleClose();

    //     notify('Board created');
    // };

    // const { toasts, handlers } = useToaster();
    // const { startPause, endPause, calculateOffset, updateHeight } = handlers;

    // const notify = (message: string) => {
    //     toast(message);
    // };

    return (
        <BaseModal
            open={open}
            onClose={handleClose}
            title="Create Column"
            subtitle="Type in a name for your new board."
        >
            <>
                <form
                    className={
                        styles.newBoard__form
                    } /* onSubmit={createBoard}*/
                >
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                        autoFocus
                    />

                    <div className={styles['create-board-modal__actions']}>
                        <Button type="submit" variant="secondary">
                            Baord erstellen
                        </Button>

                        <Button variant="warning" onClick={handleClose}>
                            Abbrechen
                        </Button>
                    </div>
                </form>
            </>
        </BaseModal>
    );
};

export default CreateNewBoardModal;
