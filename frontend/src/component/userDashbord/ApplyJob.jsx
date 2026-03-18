export default function Apply() {
  const [job, setJob] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-job/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJob(response.data.job || response.data.editemployerjob);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };
    fetchJob();
  }, [id, token]);

  const applyformdata = async (data) => {
    try {
      const respo = await axios.post(
        `http://localhost:8000/apply/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (respo.data.success) {
        toast.success("Form submitted successfully");
        navigate("/user-dashboard");
      }
    } catch (error) {
      toast.error(
        `❌ Error submitting form: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  if (!job) return <div className="text-center py-20 text-gray-500 font-semibold tracking-wide animate-pulse">Loading job details...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mb-10">
      <div className={`p-8 ${job.jobType === 'Freelance' ? 'bg-green-600' : 'bg-blue-600'} text-white`}>
        <h2 className="text-3xl font-bold mb-2">Apply for {job.jobTitle}</h2>
        <p className="opacity-90">{job.companyName} • {job.location}</p>
        
        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          {job.jobType === "Freelance" ? (
            <>
              <div className="bg-white/20 px-3 py-1 rounded-full">Budget: {job.freelanceType === 'Fixed' ? `$${job.budget}` : `$${job.hourlyRange?.min}-${job.hourlyRange?.max}/hr`}</div>
              <div className="bg-white/20 px-3 py-1 rounded-full">Duration: {job.projectDuration}</div>
              <div className="bg-white/20 px-3 py-1 rounded-full">Scope: {job.projectScope}</div>
            </>
          ) : (
            <div className="bg-white/20 px-3 py-1 rounded-full text-lg">Salary: {job.salary}</div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit(applyformdata)} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="company">
              {job.jobType === 'Freelance' ? 'Top Skill / Specialty' : 'Current Company'}
            </label>
            <input
              type="text"
              id="company"
              {...register("lastcompany")}
              placeholder={job.jobType === 'Freelance' ? "e.g. React Native Expert" : "Enter your company"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="salary">
              {job.jobType === 'Freelance' ? 'Your Proposed Rate' : 'Current Salary'}
            </label>
            <input
              type="text"
              id="salary"
              {...register("lastsalary")}
              placeholder={job.jobType === 'Freelance' ? "e.g. $500 or $30/hr" : "Enter your salary"}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="availability">
            Availability / Notice Period *
          </label>
          <input
            type="text"
            id="availability"
            {...register("availability", { required: "Availability is required" })}
            placeholder="e.g. Immediate or 2 weeks"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="coverLetter">
            {job.jobType === 'Freelance' ? 'Proposal / Cover Letter' : 'Cover Letter'}
          </label>
          <textarea
            id="coverLetter"
            rows="5"
            {...register("coverLetter")}
            placeholder="Introduce yourself and explain why you're a great fit..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="experience">
            Years of Experience *
          </label>
          <input
            type="text"
            id="experience"
            {...register("experience", { required: "Experience is required" })}
            placeholder="e.g. 5 years"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
        </div>

        <button
          type="submit"
          className={`w-full ${job.jobType === 'Freelance' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white py-4 px-4 rounded-xl transition font-bold text-lg shadow-lg transform active:scale-[0.98]`}
        >
          Submit {job.jobType === 'Freelance' ? 'Proposal' : 'Application'}
        </button>
      </form>
    </div>
  );
}
