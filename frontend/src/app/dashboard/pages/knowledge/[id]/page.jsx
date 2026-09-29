import KnowledgeForm from "@/components/dashboard/KnowledgeForm";

export default async function EditKnowledgePage({
  params,
}) {
  const { id } = await params;

  return (
    <KnowledgeForm
      mode="edit"
      articleId={id}
    />
  );
}