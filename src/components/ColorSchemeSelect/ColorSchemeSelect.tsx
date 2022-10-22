import { useModal } from '../../lib/hooks/useModal';
import ColorSchemesModal from '../ColorSchemesModal/ColorSchemesModal';
import Button from '../UI/Button/Button';
import styles from './ColorSchemeSelect.module.css';

export const ColorSchemeSelect = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    // const dispatch = useAppDispatch();

    return (
        <div className={styles.colorSchemeSelect}>
            <Button
                onClick={openModal}
            >
                Colorschemes
            </Button>

            <ColorSchemesModal
                open={isModalOpen}
                onSelect={(colorScheme) => {}
                    // dispatch(setColorScheme(colorScheme))
                }
                handleClose={closeModal}
            />
        </div>
    );
};

export default ColorSchemeSelect;
