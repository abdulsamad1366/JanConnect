import StatusBadge from './StatusBadge';

function ComplaintCard({ complaint }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{complaint.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{complaint.description}</p>
        </div>
        <StatusBadge status={complaint.status} />
      </div>
    </article>
  );
}

export default ComplaintCard;
