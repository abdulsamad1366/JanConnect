function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-GB');
}

export default formatDate;
