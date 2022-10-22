import { FunctionComponent } from 'react';
import { ModalUIProvider } from '../../lib/hooks/useModal';
import ColorSchemeSelect from '../ColorSchemeSelect/ColorSchemeSelect';
import CreateNewBoard from '../CreateNewBoard/CreateNewBoard';
import SelectBoard from '../SelectBoard/SelectBoard';
import styles from './Header.module.scss';

const Header: FunctionComponent = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__actions}>
                <ModalUIProvider>
                    <SelectBoard />
                </ModalUIProvider>

                <ModalUIProvider>
                    <CreateNewBoard />
                </ModalUIProvider>

                <ModalUIProvider>
                    <ColorSchemeSelect />
                </ModalUIProvider>
            </div>
        </div>
    );
};

export default Header;
