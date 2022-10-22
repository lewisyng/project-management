import { useModal } from '../../lib/hooks/useModal';
import SelectBoardModal from '../SelectBoardModal/SelectBoardModal';
import Button from '../UI/Button/Button';
import styles from './SelectBoard.module.scss';

export const SelectBoard = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={styles.selectBoard}>
            <Button
                onClick={openModal}
                form="outlined"
            >
                Boards
            </Button>

            <SelectBoardModal open={isModalOpen} handleClose={closeModal} />
        </div>
    );
};

export default SelectBoard;
