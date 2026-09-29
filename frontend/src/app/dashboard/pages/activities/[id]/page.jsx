import ActivityForm from "@/components/dashboard/ActivityForm";

export default async function EditActivityPage({
  params,
}) {
  const { id } = await params;

  return (
    <ActivityForm
      mode="edit"
      activityId={id}
    />
  );
}