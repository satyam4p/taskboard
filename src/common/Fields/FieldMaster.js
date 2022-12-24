import DateField from './Date/Date';
import TextField from './Text/TextField';
import LookupField from './Lookup/Lookup';
import TextArea from './TextArea/TextArea';

const fieldMaster = {
    date : DateField,
    text : TextField,
    lookup : LookupField,
    textArea : TextArea
}

export default fieldMaster;