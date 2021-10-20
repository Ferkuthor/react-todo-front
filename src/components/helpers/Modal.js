
import ReactDOM from 'react-dom'
import { Grommet, Box, Layer } from 'grommet';

export const Modal = (props) => {

    return ReactDOM.createPortal(
        <Grommet >
            <Layer>
                <Box>
                    {props.children}
                </Box>
            </Layer>
        </Grommet>
        ,
        document.getElementById('modal')
    );
}

Modal.parameters = {
    chromatic: { disable: false },
};
