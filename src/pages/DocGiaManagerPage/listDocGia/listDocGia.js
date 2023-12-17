import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { docGiaApiCaller } from "../../../utils/bookApiCaller";
import DocGiaItem from "../../../components/docGiaItem/docGiaItem";

const ListDocGia = (props) => {
  const [docGia, setDocGia] = useState([]);
  const [loading, setLoading] = useState(true);
  //   if (loading) {
  //     setLoading(false);
  //   }
  console.log(docGia);
  // const  componentDidMount() {
  //     bookApiCaller("", "get", null).then((res) => {
  //       this.setState({
  //         books: res.data,
  //       });
  //       this.loading = false;
  //     });
  //   }
  const getData = async () => {
    await docGiaApiCaller("", "get", null)
      .then((res) => {
        if (res.status === 200) {
          //   docGia["docGia"] = res.data;
          setDocGia(res.data);
          setLoading(false);
        }
      })
      .catch((er) => {
        console.log("no data");
      });
  };
  if (loading) {
    getData();
  }
  const onDelete = (maDocGia) => {
    const thisDocGia = [...docGia];
    // const ma = { maSach: maSach };
    docGiaApiCaller("", "delete", { maDocGia: maDocGia }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Xóa sách Độc giả " + maDocGia + " thành công");
        var index = -1;
        index = thisDocGia.findIndex((obj) => obj.maDocGia === maDocGia);
        if (index >= 0) {
          //   const updatedDocGia = [...docGia];
          thisDocGia.splice(index, 1);
          setDocGia(thisDocGia);
          console.log(thisDocGia);
          //   //   setDocGia([]);
          //   setDocGia(thisDocGia);
          //   setLoading(false);
        }
      }
    });
  };
  const showDocGia = () => {
    var result = null;
    try {
      if (docGia.length > 0) {
        result = docGia.map((docGia1, index) => {
          return (
            <DocGiaItem
              key={index}
              docGia={docGia1}
              index={index}
              onDelete={onDelete}
            />
          );
        });
      }
    } catch (error) {}
    return result;
  };
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="container mt-10 w90" style={{ border: "solid" }}>
          <div className="form-floating mb-3 w-100">
            <NavLink className="btn btn-primary w-100 mt-3" to="/addDocGia">
              Thêm Độc Giả
            </NavLink>
          </div>
          <table
            className="table table-primary w-100"
            style={{ fontSize: "auto" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã Độc Giả</th>
                <th scope="col">Tên Độc Giả</th>
                <th scope="col">Ngày Sinh</th>
                <th scope="col">Ngày Tạo</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>{showDocGia()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListDocGia;
