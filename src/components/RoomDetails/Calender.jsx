/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

const DatePicker = ({ value, handleSelect }) => {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}
    />
  )
}

export default DatePicker