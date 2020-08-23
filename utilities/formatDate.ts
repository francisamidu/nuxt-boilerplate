import moment from 'moment'
const formatDate = (date: Date): string => {
  const fullDate = moment(date).format('MMMM, D , YYYY')
  return fullDate
}
export default formatDate
