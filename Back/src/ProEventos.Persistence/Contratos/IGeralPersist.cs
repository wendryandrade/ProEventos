using System.Threading.Tasks;

namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersist
    {
        //GERAL
        void Add<T>(T entity) where T: class;
        void Upadte<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        void DeleteRange<T>(T[] entityArray) where T: class;
        Task<bool> SaveChangesAsync();
    }
}