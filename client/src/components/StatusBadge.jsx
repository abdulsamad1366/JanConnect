function StatusBadge({ status }) {
  const styles = {
    Pending: 'bg-amber-100 text-amber-800',
    Resolved: 'bg-emerald-100 text-emerald-800',
    Rejected: 'bg-rose-100 text-rose-800',
  };

  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status] || 'bg-slate-100 text-slate-700'}`}>{status}</span>;
}

export default StatusBadge;
