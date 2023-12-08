import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { IValues } from '../../../../../shared/types';
import MUIButton from '@mui/material/Button';

interface IProps {
  setPhotoFile: React.Dispatch<React.SetStateAction<string | File>>;
}
const UploadFile = ({ setPhotoFile }: IProps) => {
  const { handleChange, touched, errors, handleBlur, values } =
    useFormikContext<IValues>();

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MUIButton
        variant="outlined"
        style={{
          position: 'absolute',
          zIndex: 10,
          backgroundColor: 'white',
          top: 0,
          fontSize: '1em',
          height: '5.6em',
          paddingInline: '1.6em',
          pointerEvents: 'none',
          textTransform: 'capitalize',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderColor:
            Boolean(touched.formikPhoto) && Boolean(errors.formikPhoto)
              ? 'red'
              : 'gray',
        }}
      >
        <span style={{ fontSize: '1.6em' }}>Upload</span>
      </MUIButton>

      <TextField
        type="file"
        name="formikPhoto"
        onBlur={handleBlur}
        onChange={(event) => {
          //@ts-expect-error files
          const file = event.currentTarget.files[0];
          setPhotoFile(file);
          handleChange(event);
        }}
        inputProps={{ accept: '.jpg, .jpeg' }}
        value={values.formikPhoto}
        error={Boolean(touched.formikPhoto) && Boolean(errors.formikPhoto)}
        helperText={touched.formikPhoto && errors.formikPhoto}
        InputProps={{
          style: { fontSize: '1.6em', fontFamily: 'inherit' },
        }}
        FormHelperTextProps={{
          style: { fontSize: '1.2em', fontFamily: 'inherit' },
        }}
        sx={{ width: '100%' }}
      />
    </div>
  );
};

export default UploadFile;
