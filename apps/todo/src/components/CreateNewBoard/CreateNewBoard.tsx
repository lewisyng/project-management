import { IconPlus } from '@tabler/icons';
import { useModal } from '../../lib/hooks/useModal';
import CreateNewBoardModal from '../CreateNewBoardModal/CreateNewBoardModal';
import Button from '../UI/Button/Button';
import styles from './CreateNewBoard.module.css';

export const CreateNewBoard = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={styles.createNewBoard}>
            <Button onClick={openModal}>
                <IconPlus />
                New Board
            </Button>

            <CreateNewBoardModal open={isModalOpen} handleClose={closeModal} />
        </div>
    );
};

export default CreateNewBoard;
